using MasterTools.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace MasterTools.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MachineController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        [HttpGet]

        public JsonResult Get()
        {
            string sorgu = @" select id, ProcessName, SubProcessName, MachineName from MasterTools";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProcessConnection");
            SqlDataReader myReader;
            using(SqlConnection  mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand (sorgu, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }

        
        [HttpPut]

        public JsonResult Put(Machine proses)
        {
            string sorgu = @" update MasterTools 
                              set MachineName=@makine
                               where id=@masterid and ProcessName=@ProcessName and SubProcessName = @ProcessName2
                                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProcessConnection");
            SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(sorgu, mycon))
                {
                    myCommand.Parameters.AddWithValue("@masterid", proses.Id);
                    myCommand.Parameters.AddWithValue("@ProcessName2", proses.SubProcessName);
                    myCommand.Parameters.AddWithValue("@ProcessName", proses.ProcessName);
                    myCommand.Parameters.AddWithValue("@makine", proses.MachineName);





                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Güncellendi");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string sorgu = @" delete from MasterTools
                              
                               where id=@masterid
                                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProcessConnection");
            SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(sorgu, mycon))
                {
                    
                    myCommand.Parameters.AddWithValue("@masterid", id);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Silindi");
        }

    }
}

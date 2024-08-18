using MasterTools.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace MasterTools.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ProcessController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        [HttpGet]

        public JsonResult Get()
        {
            string sorgu = @" select id, ProcessName from MasterTools";

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

        [HttpPost]

        public JsonResult Post(Process proses)
        {
            string sorgu = @" insert into MasterTools ([ProcessName])
                              values (@ProcessName2)          
                                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProcessConnection");
            SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(sorgu, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ProcessName2", proses.ProcessName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Eklendi");
        }
        [HttpPut]

        public JsonResult Put(Process proses)
        {
            string sorgu = @" update MasterTools 
                              set ProcessName=@ProcessName2
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
                    myCommand.Parameters.AddWithValue("@masterid", proses.id);
                    myCommand.Parameters.AddWithValue("@ProcessName2", proses.ProcessName);
                    


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

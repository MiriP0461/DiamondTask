using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiamondController : ControllerBase
    {
        //https://localhost:44377/api/Diamond/ReadExcel/Diamonds.csv
        [HttpGet("ReadExcel/{fileName}")]
        public IActionResult ReadExcel(string fileName)
        {
            try
            {
                string fullPath = Path.Combine("Resources", fileName);

                return Ok(BLL.DiamondBLL.ReadFileFromExcel(fullPath));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost("WriteCSVFile/{fileName}")]
        public IActionResult WriteCSVFile(string fileName, DiamondDTO diamond )
        {
            try
            {
                string fullPath = Path.Combine("Resources", fileName);
                //DiamondDTO diamond2 = new DiamondDTO() { clarity = "12", color = "g", listPrice = 12, price = 121545, shape = "rach", size = (float)1.054 };
                BLL.DiamondBLL.WriteCSVFile(fullPath, diamond);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        //[HttpPost("AddDiamond")]
        //public IActionResult AddDiamond( DiamondDTO diamond)
        //{
        //    string fullPath = Path.Combine("Resources", fileName);
        //    //DiamondDTO diamond = new DiamondDTO() { clarity = "12", color = "g", listPrice = 12, price = 121545, shape = "rach", size = (decimal)1.054 };
        //    BLL.DiamondBLL.WriteCSVFile(fullPath, diamond);
        //    return Ok();
        //}
    }
}

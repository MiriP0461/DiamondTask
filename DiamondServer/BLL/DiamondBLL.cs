using CsvHelper;

using DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace BLL
{

    public class DiamondBLL
    {


        public static List<DiamondDTO> ReadFileFromExcel(string path)
        {
            try
            {

     
                    using (var reader = new StreamReader(path, Encoding.Default))
                    using (var csv = new CsvReader(reader))
                    {
                       csv.Configuration.RegisterClassMap<DiamondExcelDTO>();
                        var records = csv.GetRecords<DiamondDTO>().ToList();
                        return records;
                    }
               

            }
            catch (Exception e)
            {
                return null;
            }

        }

        public static void WriteCSVFile(string path, DiamondDTO DiamondDTO)
        {
            var resultData = ReadFileFromExcel(path);
            resultData.Add(DiamondDTO);

            using (StreamWriter sw = new StreamWriter(path, false, new UTF8Encoding(true)))
            using (CsvWriter cw = new CsvWriter(sw))
            {
                cw.WriteHeader<DiamondDTO>();
                cw.NextRecord();
                foreach (DiamondDTO dia in resultData)
                {
                    cw.WriteRecord<DiamondDTO>(dia);
                    cw.NextRecord();
                }
            }
        }

        



    }
}


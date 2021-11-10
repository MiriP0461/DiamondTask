using CsvHelper.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class DiamondExcelDTO : ClassMap<DiamondDTO>
    {
        public DiamondExcelDTO()
        {
            Map(x => x.shape).Name("shape");
            Map(x => x.size).Name("size");
            Map(x => x.color).Name("color");
            Map(x => x.clarity).Name("clarity");
            Map(x => x.price).Name("price");
            Map(x => x.listPrice).Name("listPrice");
        }
    }
}

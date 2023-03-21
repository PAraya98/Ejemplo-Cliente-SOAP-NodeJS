const xml_parse = require("xml-parse");
const soapRequest = require('easy-soap-request');
const {Client, IOptions, createClientAsync} = require('soap')
const soap = require('soap')

const consumirSoapMultiplicarV1 = async (intA, intB) => {
    const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
    const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    // Authorization header, etc.
    };
    // SOAP XML Request + parámetros @intA y @intB 
    const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
        <soap:Header>
        </soap:Header>
        <soap:Body>
            <Multiply xmlns="http://tempuri.org/">
                <intA>${intA}</intA>
                <intB>${intB}</intB>
            </Multiply>
        </soap:Body>
        </soap:Envelope>
    `;
    const { response } = await soapRequest({ url: url, headers: reqHeaders, xml: xml});
    const { headers, body, statusCode} = response;
    return xml_parse.parse(xml_parse.parse(body)[2].innerXML);
}

const consumirSoapMultiplicarV2 = async (intA, intB) => {
  let s = await createClientAsync('http://www.dneonline.com/calculator.asmx?WSDL');
  let result = await s.MultiplyAsync({intA, intB})
  return(result[0])  
}

const main = async () => {
  const resV1 = await consumirSoapMultiplicarV1(5,5);
  console.log(resV1);

  const resV2 = await consumirSoapMultiplicarV2(5,5);
  console.log(resV2);

}
main()

const instanciaAxios = require('../axios');
const fs = require('fs/promises');


const detalharEmpresas = async (req, res) => {
    const { dominioEmpresa } = req.query;

    try {
        const { data: empresa} = await instanciaAxios.get(`/?domain=${dominioEmpresa}`)
        
        const empresaLimpa = Object.fromEntries(
            Object.entries(empresa).filter(([_, value]) => value != null && value !== '' && value !== "")
        );

        
        if (empresaLimpa && empresaLimpa.company_name) {
        
        const dadosEmpresas = JSON.parse(await fs.readFile('./src/dados/empresas.json'));
        
            dadosEmpresas.push(empresaLimpa)
            await fs.writeFile('./src/dados/empresas.json', JSON.stringify(dadosEmpresas, null, 2))
            return res.status(200).json(empresaLimpa)
            
        } else {
            return res.status(404).json({ "mensagem": "Empresa não encontrada" })
        }

        

    } catch (error) {
        console.log(error.message);
        
        return res.status(500).json({ "mensagem": "Erro interno do servidor" })
    }
}


module.exports = { detalharEmpresas } 
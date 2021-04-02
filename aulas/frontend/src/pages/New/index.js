import React, { useState } from 'react';

export default function New() {

    const [company, setCopany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const enviar = () => {

    }

    return (
        <form onSubmit={enviar}>
            <label htmlFor="company" className="">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={e => setCopany(e.target.value)}
            />

                <label htmlFor="company" className="">TECNOLOGIAS * <span>(separadas por vírgulas)</span></label>
                <input
                    id="techs"
                    placeholder="Quais tecnologias vcs usam? "
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />

                    <label htmlFor="company" className="">VALOR DA DIÁRIA * <span>(EM BRANCO PARA GRATUITO)</span></label>
                    <input
                        id="price"
                        placeholder="Valor cobrado por dia "
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                <button type="submit" className="btn">Cadastrar</button>    
                </form>
    )
}
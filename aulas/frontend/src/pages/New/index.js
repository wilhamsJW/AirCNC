import React, { useState, useMemo } from 'react'; // useMemo => oberva a mudança das váriáveis do useState
import camera from '../../assets/camera.svg';
import './styles.css'

export default function New() {

    const [company, setCopany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    
    // useMemo é uma função q recebe dois parâmetros, um é arrow fucntion e o segundo um array q irá conter quais váriáveis
    // ele deve executar
    // URL.createObjectURL() -> é uma váriável global do html, irá criar uma variável temporária q iremos usar para mostrar ao user
    // a iamgem dele selecionada, será um preview para melhor experiencia do user
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    const enviar = () => {

    }

    return (
        <form onSubmit={enviar}>

            <label 
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}    
            >
                {/* input colocado, porém está como display none, como fica algo feio, não quero q apareça, 
                porém se o user clikar ele vai abrir a janela pra o use carregar a img do seu pc */}
                <input
                    type="file"
                    onChange={e => setThumbnail(e.target.files[0])}
                />
                <img src={camera} alt="Selecione sua imagem" />
            </label>

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
import { useState } from 'react'
import git from '../../assets/icons/GitHub.png'
import './index.css'

export default function Contact() {
    const [display,setDisplay] = useState('flex')
    const [back,setBack] = useState('none')

    const options = [
        {icon: 'http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG5.png', alt:'mail', caption:'e-mail', onClick:sendMail, link:'mailto:leonardomonay@gmail.com'},
        {icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/linkedin_logo_icon_170234.png', alt:'linkedIn', caption:'/leomonay', link:'https://www.linkedin.com/in/leomonay/'},
        {icon: git, alt:'GitHub', caption:'/leomonay', link:'https://github.com/Leomonay'},
        ]
    const backToButtons={
        icon: 'https://www.shareicon.net/data/512x512/2016/08/18/809860_arrows_512x512.png',
        alt: 'backToOptions',
        caption: 'Back To Options',
        onClick: backToOptions,
    }

    function Option(props){
        const {option}=props
        if(option.link) return (
            <a className='contactProfile' style={{display:display}} href={option.link} target='_blank' rel='noreferrer'>
                <img className='netLogo' src={option.icon} alt={option.alt}/>
                <div className='contactText'>{option.caption}</div> 
            </a>)
        return (
            <div className='contactProfile' style={{display:display}} onClick={option.onClick}>
                <img className='netLogo' src={option.icon} alt={option.alt}/>
                <div className='contactText'>{option.caption}</div>
            </div> 
        )    
    }
        
    function sendMail(){
        setDisplay('none')
        setBack('flex')
    }
    function backToOptions(){
        setDisplay('flex')
        setBack('none')
    }

    return(
        <div className='contentContainer'>
            <div className='pageTitle'>Contact ME</div>
            <div className='contentDescription'>
                <div className='paragraph'>
                    Please contact me by e-mail or a PM on LinkedIn, I'm always looking for new opportunities! You can also see some of my works on GitHub.
                </div>
           </div>
            <div className='contactOptions'>
                <div className='contactProfile' onClick={backToButtons.onClick} style={{display:back}}>
                    <img className='netLogo' src={backToButtons.icon} alt={backToButtons.alt}/>
                    {backToButtons.caption}
                </div> 
                {options.map((option, index)=><Option option={option} key={index}/>)}
            </div>
            <img id='chatGif' style={{display:display}} src='https://i.giphy.com/media/MfnJATkfrAIBG/giphy.webp' alt='shaking hands'/>
        </div>
    )
}
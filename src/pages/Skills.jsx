import {BiLogoReact,BiLogoTailwindCss,BiLogoPostgresql,BiLogoFirebase} from 'react-icons/bi'
import {DiDjango} from 'react-icons/di'
import {SiFastapi} from 'react-icons/si'



function Skills() {
    return <div className='flex justify-around'>
        <div className='flex flex-col items-center justify-around'>
            <div>Front-end</div>
            <div className='flex  flex-col text-3xl text-blue-500 items-center gap-x-2'>
                <BiLogoReact/>
                <BiLogoTailwindCss/>
            </div>
        </div>
        <div className='flex flex-col items-center  justify-around'>
            <div>Back-end</div>
            <div className='flex flex-col items-center '>
                <DiDjango className='text-green-800 text-[3rem]'/>
                <SiFastapi className='text-green-500 text-xl'/>
                <BiLogoPostgresql className='text-blue-800 text-[2rem]'/>
            </div>
        </div>
    </div>
}


export default Skills
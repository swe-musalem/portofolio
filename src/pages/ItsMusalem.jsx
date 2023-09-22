import img from '../assets/moji.png'

function ItsMusalem() {
    return <div className='flex flex-col justify-center items-center gap-y-4 w-full '>
        <img src={img} className='h-24 w-32' alt="" srcset="" />
        <div> Hi I'm musalem 👋 </div>
        <div>junior web developer </div>
        <div>probably a tech nerd </div>
        <div>Created at 2004/04/01</div>
    </div>
}

export default ItsMusalem
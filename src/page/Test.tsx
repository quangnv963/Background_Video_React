import video from '../assets/semiconductor_video_background_web.mp4'

function Test(){
    return(
        <div>
            <video src={video} autoPlay loop muted/>
        </div>
    )
}

export default Test
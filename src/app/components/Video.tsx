interface Props {
  videoSource: string
}

const Video = ({videoSource} : Props) => {

  return(
    <video width={"100%"} height={"50%"} autoPlay loop muted preload="none" playsInline>
      <source src={videoSource} type={"video/mp4"} />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;
function BG() {
  return (
    <div
      data-testid="BG"
      className="h-screen w-screen pointer-events-none fixed top-0 left-0 z-[-1] block"
    >
      <div
        className="w-full h-full bg-[109px] bg-repeat opacity-[0.02] rounded-none bg-[image:url(/assets/images/static.png)]"
        style={{}}
      />
    </div>
  )
}

export default BG

export const MoveCounter = ({ moveBlocks }) => {
  return (
    <div class="Count inline-flex items-start justify-start gap-[9px]">
      <div class="text-center font-['Inter'] text-2xl font-normal text-white">移動回数:</div>
      <div class="text-center font-['Inter'] text-2xl font-normal text-white">{moveBlocks}</div>
      <div class="text-center font-['Inter'] text-2xl font-normal text-white">回</div>
    </div>
  )
}
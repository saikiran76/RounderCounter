export const Bar = ({text="", content}) =>{
    return(
        <p
        className="border-[#36B6EE] text-gray-50 border-l border-r border-t border-b rounded-lg p-3 text-center font-bold text-xl bg-[#1E293B]"
      >
        {text}{content}
      </p>
    )

}
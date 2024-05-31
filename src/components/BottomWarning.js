export function BottomWarning({label, buttonText, handler}) {
    return <div className="py-2 text-sm flex justify-center" onClick={handler}>
      <div className="mr-2">
        {label}
      </div>
      <p className="pointer underline pl-1 cursor-pointer"> 
        {buttonText}
      </p>
    </div>
}
  
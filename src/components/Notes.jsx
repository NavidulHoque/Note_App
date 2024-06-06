/* eslint-disable react/prop-types */

const Notes = ({index, texts, onchange, del}) => {
    return (
        <div className="flex flex-col basis-[350px] h-[400px]">

            <div className="bg-black text-white flex justify-end gap-x-3 py-[10px] px-[7px]">
                <i className="fa-solid fa-floppy-disk cursor-pointer"></i>
                <i onClick={()=> del(index)} className="fa-solid fa-trash cursor-pointer"></i>
            </div>

            <textarea className="p-[8px] outline-0 resize-none h-full" onChange={(e) => onchange(e, index)} value={texts[index]}></textarea>

        </div>
    )
}

export default Notes

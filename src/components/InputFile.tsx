import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react"
import { Poppins } from "next/font/google"
import { UploadSimple } from "@phosphor-icons/react"

import { Title } from "./Title"

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  className?: string
  title: string
  onChangeFile: ((file: File) => void)
}

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export function InputFile({ className , title, onChangeFile }: InputFileProps) {
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState('')


  function onFileChange(value: ChangeEvent<HTMLInputElement>) {
    if (value.target.files) {
      const file = value.target.files['0'];

      setFileSize(Math.abs(file.size / 1000).toFixed(1))
      setFileName(file.name)

      onChangeFile(file)
    }
  }

  return (
    <div 
      className={`
        ${className}
        flex 
        items-center 
        gap-2
      `}
    >
      <label 
        htmlFor="input-file" 
        className={`
          ${poppins.style}
          flex
          justify-center
          items-center
          gap-2
          bg-gray-300 
          text-gray-800
          w-40
          px-4
          py-3
          text-xs
          font-bold
          rounded-lg
          cursor-pointer
          hover:bg-gray-400
          hover:duration-300
        `}
      >
        <UploadSimple size={28} />
        {title}
        <input 
          type="file" 
          accept=".pdf" 
          id="input-file" 
          hidden 
          onChange={onFileChange}
        />
      </label>

      {!fileName 
        ? <Title as="h6" className="text-xs">Nenhum arquivo selecionado...</Title>
        : <Title as="h6" className="text-sm">
            {`${fileName} ${fileSize}kb`}
          </Title>
      }
      
    </div>
  )
}
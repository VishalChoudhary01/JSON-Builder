"use client"
import React from 'react'
import JsonField from '../molecules/JsonField'
import { Form } from '../molecules/form' 
import { useFormContextProvider } from '../../contexts/FormContext'
import {Card,CardHeader,CardContent} from '../molecules/card'

const SchemaBuilder = () => {
  const methods = useFormContextProvider()

  return (
    <Card className={"bg-neutral-200/50 dark:bg-neutral-50/10"}>
      
      <CardHeader className={"w-full flex justify-center overflow-x-auto custom-scroll"}>
        <h1 className='text-neutral-700 dark:text-neutral-50/90 font-medium xl:text-xl lg:text-lg md:text-[1.15rem] text-[1.1rem] font-roboto'>Create JSON</h1>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <JsonField/>
        </Form>
      </CardContent>
    </Card>
  )
}
export default SchemaBuilder

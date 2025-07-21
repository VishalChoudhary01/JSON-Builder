"use client"
import React from 'react'
import JsonField from '../molecules/JsonField'
import { Form } from '../atoms/form' 
import { useFormContextProvider } from '../../contexts/FormContext'
import {Card,CardHeader,CardContent} from '../atoms/card'

const SchemaBuilder = () => {
  const methods = useFormContextProvider()

  return (
    <Card className={"bg-neutral-200/50"}>
      <CardHeader className={"w-full flex justify-center"}>
        <h1 className='text-gray-950 font-medium xl:text-xl lg:text-lg md:text-[0.8rem] text-[0.8rem]'>Add JSON</h1>
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

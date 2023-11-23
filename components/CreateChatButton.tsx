'use client'

import {Button} from "@/components/ui/button";
import {MessageSquarePlusIcon} from "lucide-react";
import {useRouter} from "next/navigation";

function CreateChatButton(){
  const router = useRouter()
  const createNewChat = async() => {
    // .. Logic to create new chat

    router.push(`/chat/abc}`)
  }
  return (
    <Button onClick={createNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon className="text-black dark:text-white" />
    </Button>
  )
}

export default CreateChatButton

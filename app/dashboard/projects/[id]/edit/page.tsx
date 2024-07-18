import { Project } from '@/app/lib/definitions'
import{ fetchProjectById } from '@/app/lib/data'
import Form from '@/app/ui/project/edit-form'

export default async function Page({ params }: { params: { id: string } }) {
  const id  = params.id
  const project: Project | null = await fetchProjectById(id)
  return (
    <div>
      <Form project={project} />
    </div>
  )
}

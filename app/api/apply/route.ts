import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

interface Application {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  experience: string
  source: string
  message: string
  submittedAt: string
}

const FILE_PATH = path.join(process.cwd(), 'applications.json')

async function readApplications(): Promise<Application[]> {
  try {
    const content = await readFile(FILE_PATH, 'utf-8')
    return JSON.parse(content) as Application[]
  } catch {
    return []
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Omit<Application, 'submittedAt'>

    const application: Application = {
      ...body,
      submittedAt: new Date().toISOString(),
    }

    const applications = await readApplications()
    applications.push(application)

    await writeFile(FILE_PATH, JSON.stringify(applications, null, 2), 'utf-8')

    return NextResponse.json({ success: true, message: 'Candidature reçue' })
  } catch (error) {
    console.error('Error saving application:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la sauvegarde de la candidature' },
      { status: 500 }
    )
  }
}

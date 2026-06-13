import React from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

// 1. Define the TypeScript interface for your job data
interface Role {
  role: string
  duration: string
  description: any // RichText data
  employmentType?: string
  location?: string
}

interface Company {
  company: string
  logo?: string
  roles: Role[]
}

interface ExperienceTimelineProps {
  companies: Company[]
}

function capitalizeFirstLetter(val: string) {
  return val.charAt(0).toUpperCase() + String(val).slice(1)
}

// 2. Add your career history data
export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ companies }) => {
  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-6">
          {companies.map((company, companyIndex) => {
            const isLast = companyIndex === companies.length - 1
            const hasSingleRole = company.roles.length === 1

            return (
              <div key={company.company} className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-14'}`}>
                {/* Timeline Dot for Company */}
                <div className="absolute -left-[11px] top-5 size-5 rounded-full border-[3px] border-[#334bd3] bg-white" />

                {/* Company Block */}
                <div className="flex gap-6">
                  {/* Logo */}
                  <div className="shrink-0">
                    {company.logo && (
                      <Image
                        src={company.logo}
                        alt={company.company}
                        width={50}
                        height={50}
                        className="rounded-lg object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className={`text-3xl md:text-4xl font-medium ${hasSingleRole ? 'mb-4' : 'mb-8'}`}
                    >
                      {company.company}
                    </h2>

                    <div className={hasSingleRole ? '' : 'space-y-10'}>
                      {company.roles.map((role, roleIndex) => (
                        <div key={`${role.role}-${roleIndex}`}>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 w-full">
                            <div className="min-w-0">
                              <h3 className="text-2xl font-normal">{role.role}</h3>

                              {(role.location || role.employmentType) && (
                                <p className="text-lg text-slate-500">
                                  {role.location}
                                  {role.location && role.employmentType && ' • '}
                                  {role.employmentType
                                    ? capitalizeFirstLetter(role.employmentType)
                                    : ''}
                                </p>
                              )}
                            </div>

                            <span className="text-lg whitespace-nowrap shrink-0">
                              {role.duration}
                            </span>
                          </div>

                          {role.description && (
                            <div className="mt-4 text-slate-600">
                              <RichText data={role.description} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

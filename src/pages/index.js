import React from "react"
import { StoplightProject } from '@stoplight/elements-dev-portal';

require('@stoplight/elements-dev-portal/styles.min.css');

export default function Home() {
  return <div>
      <StoplightProject 
        projectId="cHJqOjYwNjYx"
        router={typeof window === 'undefined' ? 'memory' : 'history'} 
      />
    </div>
}

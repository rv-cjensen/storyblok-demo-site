import { useRouter } from 'next/router'
import SbEditable from 'storyblok-react'
import * as GlobalComponents from '@globals/components';

export default function DynamicComponent({blok}) {
  const { isPreview } = useRouter()
  // check if component is defined above
  if (typeof GlobalComponents[blok.component] !== 'undefined') {
    const Component = GlobalComponents[blok.component]
    // wrap with SbEditable for visual editing
    return isPreview
      ? (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
      : <Component blok={blok} />
  }

  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

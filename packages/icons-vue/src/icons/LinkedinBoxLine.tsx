// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkedinBoxLineSvg from '@airclass/icons-svg/lib/asn/LinkedinBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkedinBoxLineSvg}></AntdIcon>;
};

LinkedinBoxLine.displayName = 'LinkedinBoxLine';
LinkedinBoxLine.inheritAttrs = false;
export default LinkedinBoxLine;
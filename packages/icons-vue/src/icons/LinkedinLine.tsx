// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkedinLineSvg from '@airclass/icons-svg/lib/asn/LinkedinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkedinLineSvg}></AntdIcon>;
};

LinkedinLine.displayName = 'LinkedinLine';
LinkedinLine.inheritAttrs = false;
export default LinkedinLine;
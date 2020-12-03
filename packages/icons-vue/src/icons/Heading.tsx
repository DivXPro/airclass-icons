// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeadingSvg from '@airclass/icons-svg/lib/asn/Heading';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heading = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadingSvg}></AntdIcon>;
};

Heading.displayName = 'Heading';
Heading.inheritAttrs = false;
export default Heading;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IeLineSvg from '@airclass/icons-svg/lib/asn/IeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeLineSvg}></AntdIcon>;
};

IeLine.displayName = 'IeLine';
IeLine.inheritAttrs = false;
export default IeLine;
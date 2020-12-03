// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwordLineSvg from '@airclass/icons-svg/lib/asn/SwordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwordLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwordLineSvg}></AntdIcon>;
};

SwordLine.displayName = 'SwordLine';
SwordLine.inheritAttrs = false;
export default SwordLine;
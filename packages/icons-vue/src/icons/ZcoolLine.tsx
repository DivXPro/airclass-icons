// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZcoolLineSvg from '@airclass/icons-svg/lib/asn/ZcoolLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZcoolLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZcoolLineSvg}></AntdIcon>;
};

ZcoolLine.displayName = 'ZcoolLine';
ZcoolLine.inheritAttrs = false;
export default ZcoolLine;
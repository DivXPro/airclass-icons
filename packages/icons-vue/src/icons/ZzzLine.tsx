// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZzzLineSvg from '@airclass/icons-svg/lib/asn/ZzzLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZzzLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZzzLineSvg}></AntdIcon>;
};

ZzzLine.displayName = 'ZzzLine';
ZzzLine.inheritAttrs = false;
export default ZzzLine;
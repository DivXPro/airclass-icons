// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutRowLineSvg from '@airclass/icons-svg/lib/asn/LayoutRowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutRowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutRowLineSvg}></AntdIcon>;
};

LayoutRowLine.displayName = 'LayoutRowLine';
LayoutRowLine.inheritAttrs = false;
export default LayoutRowLine;
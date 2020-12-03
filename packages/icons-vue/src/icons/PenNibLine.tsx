// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PenNibLineSvg from '@airclass/icons-svg/lib/asn/PenNibLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PenNibLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenNibLineSvg}></AntdIcon>;
};

PenNibLine.displayName = 'PenNibLine';
PenNibLine.inheritAttrs = false;
export default PenNibLine;
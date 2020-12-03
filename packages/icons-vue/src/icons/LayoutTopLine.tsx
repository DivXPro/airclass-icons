// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutTopLineSvg from '@airclass/icons-svg/lib/asn/LayoutTopLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutTopLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutTopLineSvg}></AntdIcon>;
};

LayoutTopLine.displayName = 'LayoutTopLine';
LayoutTopLine.inheritAttrs = false;
export default LayoutTopLine;
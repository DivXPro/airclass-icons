// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutMasonryLineSvg from '@airclass/icons-svg/lib/asn/LayoutMasonryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutMasonryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutMasonryLineSvg}></AntdIcon>;
};

LayoutMasonryLine.displayName = 'LayoutMasonryLine';
LayoutMasonryLine.inheritAttrs = false;
export default LayoutMasonryLine;
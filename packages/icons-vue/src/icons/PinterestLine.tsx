// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PinterestLineSvg from '@airclass/icons-svg/lib/asn/PinterestLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinterestLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinterestLineSvg}></AntdIcon>;
};

PinterestLine.displayName = 'PinterestLine';
PinterestLine.inheritAttrs = false;
export default PinterestLine;
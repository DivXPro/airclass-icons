// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BellLineSvg from '@airclass/icons-svg/lib/asn/BellLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellLineSvg}></AntdIcon>;
};

BellLine.displayName = 'BellLine';
BellLine.inheritAttrs = false;
export default BellLine;
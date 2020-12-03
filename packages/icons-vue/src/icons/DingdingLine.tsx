// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DingdingLineSvg from '@airclass/icons-svg/lib/asn/DingdingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingdingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingdingLineSvg}></AntdIcon>;
};

DingdingLine.displayName = 'DingdingLine';
DingdingLine.inheritAttrs = false;
export default DingdingLine;
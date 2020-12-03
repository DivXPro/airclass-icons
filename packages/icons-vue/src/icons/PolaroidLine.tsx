// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PolaroidLineSvg from '@airclass/icons-svg/lib/asn/PolaroidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PolaroidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PolaroidLineSvg}></AntdIcon>;
};

PolaroidLine.displayName = 'PolaroidLine';
PolaroidLine.inheritAttrs = false;
export default PolaroidLine;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PencilLineSvg from '@airclass/icons-svg/lib/asn/PencilLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PencilLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PencilLineSvg}></AntdIcon>;
};

PencilLine.displayName = 'PencilLine';
PencilLine.inheritAttrs = false;
export default PencilLine;
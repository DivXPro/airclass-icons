// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DraftLineSvg from '@airclass/icons-svg/lib/asn/DraftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DraftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DraftLineSvg}></AntdIcon>;
};

DraftLine.displayName = 'DraftLine';
DraftLine.inheritAttrs = false;
export default DraftLine;
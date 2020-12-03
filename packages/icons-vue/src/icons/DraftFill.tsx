// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DraftFillSvg from '@airclass/icons-svg/lib/asn/DraftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DraftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DraftFillSvg}></AntdIcon>;
};

DraftFill.displayName = 'DraftFill';
DraftFill.inheritAttrs = false;
export default DraftFill;
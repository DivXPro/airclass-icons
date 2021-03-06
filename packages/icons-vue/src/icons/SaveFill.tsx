// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SaveFillSvg from '@airclass/icons-svg/lib/asn/SaveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveFillSvg}></AntdIcon>;
};

SaveFill.displayName = 'SaveFill';
SaveFill.inheritAttrs = false;
export default SaveFill;
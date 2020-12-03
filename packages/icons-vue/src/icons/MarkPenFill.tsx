// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkPenFillSvg from '@airclass/icons-svg/lib/asn/MarkPenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkPenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkPenFillSvg}></AntdIcon>;
};

MarkPenFill.displayName = 'MarkPenFill';
MarkPenFill.inheritAttrs = false;
export default MarkPenFill;
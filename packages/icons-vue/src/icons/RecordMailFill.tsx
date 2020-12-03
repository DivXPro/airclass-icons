// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecordMailFillSvg from '@airclass/icons-svg/lib/asn/RecordMailFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecordMailFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordMailFillSvg}></AntdIcon>;
};

RecordMailFill.displayName = 'RecordMailFill';
RecordMailFill.inheritAttrs = false;
export default RecordMailFill;
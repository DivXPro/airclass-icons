// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NewspaperFillSvg from '@airclass/icons-svg/lib/asn/NewspaperFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewspaperFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NewspaperFillSvg}></AntdIcon>;
};

NewspaperFill.displayName = 'NewspaperFill';
NewspaperFill.inheritAttrs = false;
export default NewspaperFill;
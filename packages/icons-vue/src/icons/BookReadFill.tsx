// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookReadFillSvg from '@airclass/icons-svg/lib/asn/BookReadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookReadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookReadFillSvg}></AntdIcon>;
};

BookReadFill.displayName = 'BookReadFill';
BookReadFill.inheritAttrs = false;
export default BookReadFill;
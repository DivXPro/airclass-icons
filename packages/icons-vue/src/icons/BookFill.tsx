// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookFillSvg from '@airclass/icons-svg/lib/asn/BookFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookFillSvg}></AntdIcon>;
};

BookFill.displayName = 'BookFill';
BookFill.inheritAttrs = false;
export default BookFill;
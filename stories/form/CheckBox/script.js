export default function(args) {
  if (args.indeterminate) {
    return `
      document.getElementById('customCheck111-33').indeterminate = true;
    `;
  }
};
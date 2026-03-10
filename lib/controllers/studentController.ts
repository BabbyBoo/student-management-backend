//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/studentModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);
export class ContactController {
    public async addNewContact(req: Request, res: Response) {
        try {
            let newContact = new Contact(req.body);
            const contact = await newContact.save();
            res.status(200).send({
                message: 'GET request successfull'
            })
        }
        catch (err) {
            return res.status(500).send(err);
        }
    }

    public async getContacts(req: Request, res: Response) {
        try {
            const contacts = await Contact.find({});
            res.json(contacts);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public async deleteAllContacts(req: Request, res: Response) {
        try {
            const contact = await Contact.deleteMany({});
            //res.json(contacts);

            res.json({ message: 'Successfully deleted all contact!' });
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    public async getContactWithID(req: Request, res: Response) {
        try {
            const contact = await Contact.findById(req.params.contactId);

            if (!contact) {
                return res.status(404).json({ message: "Contact not found" });
            }

            res.json(contact);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    public async updateContact(req: Request, res: Response) {
        try {
            const contact = await Contact.findOneAndUpdate(
                { _id: req.params.contactId },
                req.body,
                { new: true }
            );

            if (!contact) {
                return res.status(404).json({ message: "Contact not found" });
            }

            res.json(contact);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    public async deleteContact(req: Request, res: Response) {
        try {
            const contact = await Contact.findByIdAndDelete(req.params.contactId);

            if (!contact) {
                return res.status(404).json({ message: "Contact not found" });
            }

            res.json({ message: 'Successfully deleted contact!' });
        } catch (err) {
            return res.status(500).send(err);
        }
    }


}